// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.toUTCString property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.42/S15.9.5.42_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.toUTCString.length;
Date.prototype.toUTCString.length = 1;
if (Date.prototype.toUTCString.length !== x) {
  $ERROR('#1: The Date.prototype.toUTCString.length has the attribute ReadOnly');
}

