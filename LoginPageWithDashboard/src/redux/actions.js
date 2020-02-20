function loginAction(user,passwd){
    return {
        type:'LOG_IN',
        user,
        passwd
    }
}

export default loginAction;