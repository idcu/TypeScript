/// <reference path="fourslash.ts" />

//// class foo { };
//// function foo() { /**/ }

goTo.marker();

// Function with bodies can only merge with classes
// Class declaration cannot implement overload list x 2
verify.numberOfErrorsInCurrentFile(4);

// Shouldn't change the number of errors
edit.insert('return null;');
verify.numberOfErrorsInCurrentFile(4);

