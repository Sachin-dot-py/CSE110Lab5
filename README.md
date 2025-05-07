# Lab 5

Lab done by: Sachin Ramanathan, Alan De Luna


1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Nope, we can't use a unit test for this because unit tests cannot test how these individual components interact with each other on an application/feature level. In this case, there are many different components that combine to make this feature work, and this is better split up into many different unit tests.


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes I would, this is a specific feature that can be tested using a certain set of inputs and an expected behaviour. Therefore, this would be an appropriate feature for a unit test.