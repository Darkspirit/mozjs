// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-ary-trailing-comma.case
// - src/dstr-binding/default/const-stmt.template
/*---
description: Trailing comma is allowed following BindingPropertyList (`const` statement)
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    LexicalBinding : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let value be GetValue(rhs).
    3. ReturnIfAbrupt(value).
    4. Let env be the running execution context's LexicalEnvironment.
    5. Return the result of performing BindingInitialization for BindingPattern
       using value and env as the arguments.

    13.3.3 Destructuring Binding Patterns

    ObjectBindingPattern[Yield] :
        { }
        { BindingPropertyList[?Yield] }
        { BindingPropertyList[?Yield] , }
---*/

const { x: [y], } = { x: [45] };

assert.sameValue(y,45);

reportCompare(0, 0);
