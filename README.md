# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Approach:

1. The application uses React along with Ant Design components for UI elements.
2. It defines a App component that represents the main layout of the application.
3. The App component consists of a collapsible side navigation (Sider) and a chat component (ChatComponent).
4. The side navigation contains user information, menu items, and a switch for toggling between modes.
5. The chat component displays messages and provides an input field for sending messages.
6. CSS styles are applied to achieve the desired layout and appearance.
7. Filtering functionality is implemented to filter data based on search queries.
8. State management is handled using React hooks (useState) and effects (useEffect).


Assumptions:

1. Data structure: The Data object contain chat and research-related information. It's assumed that this data structure is fetched from an external source.
2. Modes: The application supports two modes (Mode 1 and Mode 2). It's assumed that these modes represent different views or functionalities within the application.
3. Icons and styling: Icons and styles are assumed to be provided by Ant Design and custom CSS (App.module.scss).


Unit Test Cases:

Test cases could cover functionalities such as:

1. Rendering of components with different props.
2. Handling of user interactions (e.g., clicking, typing).
3. Data filtering and mode switching.
4. Selecting line item would represent selected line item.
5. Error handling scenarios.
6. On change of mode the background and animation of logo changes.
7. On click of an left arrow button the side bar collapses.
8. On click of an right arrow button the side bar expands.
9. On mode-1 search works based on ID or name.
10. On selection of particular name the relavent conversation appers.
11. On mode-2 search works based on search topic.
12. On selection of particular research topic the relavent conversation appers.
