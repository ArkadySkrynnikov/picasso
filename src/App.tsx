import List from "./components/list/List.tsx";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import PostPage from "./components/onePost/PostPage.tsx";

function App() {
    return (
        <Routes>
            <Route
                path={"/"}
                element={
                    <div className='main'>
                        <List />
                    </div>
                }
            />
            <Route
                path={"/:pageId"}
                element={
                    <div className='main'>
                        <PostPage />
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
