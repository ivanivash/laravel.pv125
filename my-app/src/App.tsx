import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import DefaultLayout from "./components/container/DefaultLayout";
import LoginPage from "./components/auth/login/LoginPage";
import AdminLayout from "./components/adminn/container/AdminLayout";
import AdminDashboard from "./components/adminn/dashboard/AdminDashboard";
import CategoryListPage from "./components/adminn/category/list/CategoryListPage";
import CategoryCreatePage from "./components/adminn/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/adminn/category/edit/CategoryEditPage";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                </Route>

                <Route path={"/admin"} element={<AdminLayout/>}>
                    <Route index element={<AdminDashboard/>}/>
                    <Route path="category">
                        <Route index element={<CategoryListPage/>}/>
                        <Route path="create" element={<CategoryCreatePage/>}/>
                        <Route path="edit">
                            <Route path=":id" element={<CategoryEditPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;