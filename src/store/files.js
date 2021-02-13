import axios from 'axios'
export default {
    namespaced : true, 
    state: {
        files:[]
      },
    
      getters: {
        files (state) {
          return state.files
        },

      },
    
      mutations: {
        SET_FILE (state, files) {
          state.files = files
        },
    
      },

    actions: {
        async getFiles ({commit}){
            console.log('hi')
            return await axios.get('api/files').then((response) => {
                if(response.status){
                    commit('SET_FILE',response.data.data)
                    return response
                }
            }).catch(error =>{
                throw error.message
            })
        }
      }
}