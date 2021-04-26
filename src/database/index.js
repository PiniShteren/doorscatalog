import Axios from 'axios';
const like = (id) => {
      debugger;
      Axios.post(`http://localhost:3001/like`, {
            id: id
      })
            .then((res) => {
                  alert(res);
            }).catch((err) => {
                  alert(err);
            })
}
export default like;