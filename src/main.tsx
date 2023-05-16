import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Photos from "./pages/Photos.tsx";
import Cart from "./pages/Cart.tsx";
import { ContextProvider } from "./context/context.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Photos />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ContextProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ContextProvider>
);
