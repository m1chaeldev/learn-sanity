import {
    BrowserRouter,
    Link,
    Outlet,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom"
import "./App.css"
import PostsPage from "./pages/Posts"
import { useEffect } from "react"
import AuthorsPage from "./pages/Authors"
import CategoriesPage from "./pages/Categories"

const tabLists = {
    post: "post",
    authors: "authors",
    categories: "categories",
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<PostsPage />} />
                    <Route path={tabLists.post} element={<PostsPage />} />
                    <Route path={tabLists.authors} element={<AuthorsPage />} />
                    <Route
                        path={tabLists.categories}
                        element={<CategoriesPage />}
                    />
                    <Route path="*" element={<PostsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const menuLists = Object.keys(tabLists)

function App() {
    const location = useLocation()
    const currentTab = location.pathname.replace("/", "")
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentTab) navigate(tabLists.post)
    }, [currentTab])

    return (
        <div>
            <header>
                <div className="topnav">
                    {menuLists.map((i) => (
                        <Link
                            key={i}
                            className={`${i === currentTab && "active"}`}
                            to={i}
                        >
                            {i}
                        </Link>
                    ))}
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default AppRoutes
