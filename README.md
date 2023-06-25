# Chat-App
Certainly! Here's a brief overview and explanation of the provided Chat App code:

`App.js`:
- The `App` component is the main component of the chat application.
- It imports the necessary dependencies such as `React`, `ChatInput`, `ChatMessage`, and the `App.css` file.
- The `user_list` array contains a list of usernames that will be randomly assigned to chat messages.
- The `logoURL` variable holds the URL of the logo image to be displayed.
- The component initializes a state variable `messages` using the `useState` hook to keep track of the chat messages.
- The `handleSendMessage` function is called when a new message is entered in the chat input box. It generates a random username from the `user_list` and creates a new message object with the entered message, assigned username, and an initial like count of 0. The new message is added to the existing messages using the `setMessages` function.
- The `handleLikeClick` function is called when the like button of a message is clicked. It updates the like count of the corresponding message by incrementing it by 1.
- The `handleMentionClick` function is called when the mention button of a message is clicked. It adds the selected username as a mention in the chat input box.
- The `render` method returns the JSX code that represents the chat application UI. It includes the logo image, a chat header, the list of chat messages rendered using the `ChatMessage` component, and the chat input box rendered using the `ChatInput` component.
- The `ChatMessage` components are generated dynamically based on the messages state. Each message is passed the necessary props such as username, message, likeCount, onLikeClick, and onMentionClick.
- The `ChatInput` component is rendered at the bottom and is responsible for taking user input and triggering the `handleSendMessage` function.

`App.css`:
- The CSS file contains styling rules for the chat application.
- The `.container` class sets the maximum width of the chat app container, centers it horizontally, and provides some padding.
- The `.logo` class sets the styling for the logo image, such as display, width, height, and centering it.
- The `.chat-header` class sets the styling for the chat header, such as center alignment and top and bottom margins.
- The `.chat-message` class sets the margin at the bottom of each chat message.
- The `.like-button` and `.mention-button` classes set the margin to create space between the like and mention buttons.

Overall, this code sets up a basic chat application in ReactJS. It allows users to enter chat messages, assigns random usernames to each message, displays the messages with the option to like them, and includes a mention feature. The UI is styled using CSS to provide a visually appealing layout.
