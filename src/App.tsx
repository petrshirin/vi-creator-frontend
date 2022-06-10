import React, {useEffect} from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {UserInfoType} from "./api/UserApi";
import RegistrationContainer from "./components/RegistrationContainer";
import RegistrationContent from "./components/RegistrationContent";
import LoginContent from "./components/LoginContent";
import PageContainer from "./components/PageContainer";
import Settings from "./components/Settings";
import Graph from "./components/Graph";
import RunBot from "./components/RunBot";
import userStore from "./stores/userStore";
import {observer} from "mobx-react";

const App = observer(() => {
    useEffect(() => {
        userStore.userApi.getUser().then((r) => {
            let data: UserInfoType = r.data
            userStore.firstName = data.firstName
            userStore.secondName = data.secondName
            userStore.birthDate = data.birthDate
            userStore.email = data.email
            userStore.role = data.role
        })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <div>
                            <MainPage role={'student'}/>
                        </div>
                    </div>
                }/>
                <Route path="/registration" element={
                    <RegistrationContainer type={"registration"} header={"Регистрация"}>
                        <RegistrationContent/>
                    </RegistrationContainer>
                } />
                <Route path="/login" element={
                    <RegistrationContainer type={"login"} header={"Авторизация"}>
                        <LoginContent />
                    </RegistrationContainer>
                } />
                <Route path="/settings" element={
                    <PageContainer title={'Настройки'}>
                        <Settings />
                    </PageContainer>
                } />
                <Route path="/graph/" element={
                    <PageContainer title={'Граф'} className={'full-width'}>
                        <Graph />
                    </PageContainer>
                } />
                <Route path="/run_bot/" element={
                    <PageContainer title={'Запуск бота'} className={'full-width'}>
                        <RunBot />
                    </PageContainer>
                } />
            </Routes>
        </BrowserRouter>
    );
})

export default App;
