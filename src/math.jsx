const pi = 3.14159962;
export default pi;
// when we want to export only pi from this jsx file to any other file
//there is only one default import export per file

//if we want to export something more here

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export { doublePi, triplePi };
//it has to written like this if we want to export non default
//names matter while expoting and importing
