import "../symbolDisposeShim";

import { Debug } from "../debug";
import { Lockable } from "./lockable";
import { Mutex } from "./mutex";
import { SharedMutex } from "./sharedMutex";

/**
 * Establishes an exclusive lock on a mutex, inspired by `std::unique_lock` in C++.
 * @internal
 */
export class UniqueLock<T extends Mutex | SharedMutex> {
    private _mutex: T | undefined;
    private _lockable: Lockable | undefined;
    private _ownsLock = false;

    constructor(mutex?: T, t?: "lock" | "defer-lock" | "try-to-lock" | "adopt-lock") {
        this._mutex = mutex;
        this._lockable =
            mutex instanceof Mutex ? Mutex.asLockable(mutex) :
            mutex instanceof SharedMutex ? SharedMutex.asLockable(mutex) :
            mutex;
        if (this._lockable) {
            switch (t) {
                case "defer-lock":
                    break;
                case "try-to-lock":
                    this._ownsLock = this._lockable.tryLock();
                    break;
                case "adopt-lock":
                    this._ownsLock = true;
                    break;
                case "lock":
                case undefined:
                    this._lockable.lock();
                    this._ownsLock = true;
                    break;
            }
        }
    }

    get mutex() {
        return this._mutex;
    }

    get ownsLock() {
        return this._ownsLock;
    }

    tryLock(this: UniqueLock<Extract<T, Lockable | Mutex | SharedMutex>>): boolean {
        Debug.assert(this._lockable);
        Debug.assert(!this._ownsLock);
        this._ownsLock = this._lockable.tryLock();
        return this._ownsLock;
    }

    lock(): void {
        Debug.assert(this._lockable);
        Debug.assert(!this._ownsLock);
        this._lockable.lock();
        this._ownsLock = true;
    }

    unlock() {
        Debug.assert(this._lockable);
        Debug.assert(this._ownsLock);
        this._ownsLock = false;
        this._lockable.unlock();
    }

    release() {
        this._mutex = undefined;
        this._lockable = undefined;
        this._ownsLock = false;
    }

    swap(other: UniqueLock<T>) {
        const mutex = other._mutex;
        const lockable = other._lockable;
        const ownsLock = other._ownsLock;
        other._mutex = this._mutex;
        other._lockable = this._lockable;
        other._ownsLock = this._ownsLock;
        this._mutex = mutex;
        this._lockable = lockable;
        this._ownsLock = ownsLock;
    }

    move() {
        const other = new UniqueLock<T>();
        this.swap(other);
        return other;
    }

    [Symbol.dispose]() {
        const lockable = this._lockable;
        if (lockable) {
            const ownsLock = this._ownsLock;
            this._mutex = undefined;
            this._lockable = undefined;
            this._ownsLock = false;
            if (ownsLock) {
                lockable.unlock();
            }
        }
    }
}
