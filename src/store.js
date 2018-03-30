export const storeDef = {
  state: {
    passwordList: [
      {
        group: "A",        
        passwords: [
          { _id: 0, model: false, system: "ABC", user_name: "User1", pass: "1091asdfaks" },
          { _id: 1, model: false, system: "ABD", user_name: "User2", pass: "notapassword" }
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
      }
    ]
  },
  getters: {
    allPasswords: state => state.passwordList,
    system: (state, getters) => system => {
      let indexOfGroup = state.passwordList.map((e) => e.group).indexOf(system[0].toUpperCase())
      let indexOfSystem = state.passwordList[indexOfGroup].passwords.findIndex((e) => e.system === system)

      return state.passwordList[indexOfGroup].passwords[indexOfSystem]
    }
  },
  actions: {},
  mutations: {
    savePassword: (state, password) => {

      let indexOfGroup = state.passwordList.map((e) => e.group).indexOf(password.system[0])
      let indexOfSystem = state.passwordList[indexOfGroup].passwords.findIndex((e) => e.system === password.system)

      if (indexOfGroup >= 0) {

        if (indexOfSystem) {

          state.passwordList[indexOfGroup].passwords[indexOfSystem] = password

        } else {

          let index = state.passwordList[indexOfGroup].passwords.length

          state.passwordList[indexOfGroup].passwords.push({
            _id: index,
            system: password.system,
            user_name: password.user_name,
            pass: password.pass
          })

        }

      } else {

        state.passwordList.push({
          group: password.system[0].toUpperCase(),
          passwords: [password]
        })

      }
    },
    removePassword: (state, item) => {
      let indexOfGroup = state.passwordList.map((e) => e.group).indexOf(item[0].toUpperCase())
      let indexOfId = state.passwordList[indexOfGroup].passwords.findIndex((element) => element._id == item[1])

      //Remove password object
      state.passwordList[indexOfGroup].passwords.splice(indexOfId, 1)

      //Remove group
      if (state.passwordList[indexOfGroup].passwords.length === 0){
        state.passwordList.splice(indexOfGroup, 1)
      }
    }
  }
}