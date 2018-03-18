export const storeDef = {
    state: {
        passwordList: [
            {
                group: "A",
                passwords: [
                    { _id: 0, system: "ABC", user_name: "Tom.Okamoto", pass: "1091asdfaks" },
                    { _id: 1, system: "ABD", user_name: "Tom.Okamoto", pass: "***********" }
                ]
            },
            {
                group: "B",
                passwords: [
                    { _id: 0, system: "BBC", user_name: "Tom.Okamoto", pass: "1091asdfaks" },
                    { _id: 1, system: "BBD", user_name: "Tom.Okamoto", pass: "1091asdfaks" },
                ]
            },
            {
                group: "C",
                passwords: [
                    { _id: 0, system: "CBC", user_name: "Tom.Okamoto", pass: "1091asdfaks" },
                    { _id: 1, system: "CBD", user_name: "Tom.Okamoto", pass: "1091asdfaks" }
                ]
            },
            {
                group: "D",
                passwords: [
                    { _id: 0, system: "DBC", user_name: "Tom.Okamoto", pass: "1091asdfaks" },
                    { _id: 1, system: "DBD", user_name: "Tom.Okamoto", pass: "1091asdfaks" }
                ]
            },
            {
                group: "P",
                passwords: [
                    { _id: 0, system: "P1D 010", user_name: "OKAMOTOT", pass: "1091asdfaks" },
                    { _id: 1, system: "P1D 050", user_name: "OKAMOTOT", pass: "1091asdfaks" }
                ]
            }
        ]
    },
    getters: {
        allPasswords: state => {
            return state.passwordList
        }
    },
    actions: {},
    mutations: {
        savePassword: (state, password) => {
                        
            let indexOfGroup = state.passwordList.map( (e) => e.group ).indexOf(password.system[0])
            
            if (indexOfGroup >= 0) {

                let index = state.passwordList[indexOfGroup].passwords.length
                
                state.passwordList[indexOfGroup].passwords.push({
                    _id: index,
                    system: password.system,
                    user_name: password.user_name,
                    pass: password.pass
                })

            } else {                

                state.passwordList.push({ 
                    group: password.system[0],
                    passwords: [password]
                })

            }            
        }
    }
}