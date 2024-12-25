# Unresponsive Node.js Server

This repository demonstrates a common issue in Node.js where a long-running operation in the request handler can make the server unresponsive. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Problem

The server in `bug.js` uses a `while` loop to simulate a computationally expensive task.  This blocks the event loop, preventing the server from handling new requests until the loop completes.  This results in an unresponsive server and poor user experience.

## Solution

The solution in `bugSolution.js` demonstrates how to use asynchronous programming techniques, specifically `setTimeout`, to avoid blocking the event loop.  This approach ensures the server remains responsive even during long-running operations.