
const store = (state = { doors: [], categories: [] }, action) => {

      switch (action.type) {
            case 'GET':
                  return state;
            case 'INSERT':
                  let category = [];
                  let flag = false;
                  action.payload.forEach((e, i) => {
                        flag = false;
                        category.forEach((category, index) => {
                              if (e.category === category) {
                                    flag = true;
                              }

                        });
                        if (!flag) {
                              category.push(e.category);
                        }
                  });
                  return state = { doors: action.payload, categories: category };
            default:
                  return state;
      }
}
export default store;