export const storeDef = {
  state: {
    passwordList: [
      {
        group: "A",        
        passwords: [
          { _id: 0, model: false, system: "ABC", user_name: "User1", pass: "1091asdfaks" },
          { _id: 1, model: false, system: "ABD", user_name: "User2", pass: "***********" }
        ]
      },
      {
        group: "B",
        model: false,
        passwords: [
          { _id: 0, model: false, system: "BBC", user_name: "User1", pass: "1091asdfaks" },
          { _id: 1, model: false, system: "BBD", user_name: "User2", pass: "1091asdfaks" },
        ]
      },
      {
        group: "C",
        model: false,
        passwords: [
          { _id: 0, model: false, system: "CBC", user_name: "User1", pass: "1091asdfaks" },
          { _id: 1, model: false, system: "CBD", user_name: "User2", pass: "1091asdfaks" }
        ]
      },
      {
        group: "D",
        model: false,
        passwords: [
          { _id: 0, model: false, system: "DBC", user_name: "User1", pass: "1091asdfaks" },
          { _id: 1, model: false, system: "DBD", user_name: "User2", pass: "1091asdfaks" }
        ]
      },
      {
        group: "P",
        model: false,
        passwords: [
          { _id: 0, model: false, system: "P1D 010", user_name: "User1", pass: "1091asdfaks" },
          { _id: 1, model: false, system: "P1D 050", user_name: "User2", pass: "1091asdfaks" }
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

      let indexOfGroup = state.passwordList.map((e) => e.group).indexOf(password.system[0])

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