#!/usr/bin/node

const args = process.argv.slice(2); // Remove first two default arguments

if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
