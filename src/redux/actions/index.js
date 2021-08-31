export const INSERT = 'INSERT';

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const CHANGE_FLAG = 'CHANGE_FLAG';

export const PRODUCT = "PRODUC";

export const CHANGE_FLAG_MENU = "CHANGE_FLAG_MENU";

export const insert = (data) => {
      return {
            type: INSERT,
            payload: data
      }
}

export const changeCategory = (category) => {
      return {
            type: CHANGE_CATEGORY,
            payload: category
      }
}

export const chnageFlag = () => {
      return {
            type: CHANGE_FLAG
      }
}

export const productShow = (product) => {
      return {
            type: PRODUCT,
            payload: product
      }
}

export const changeFlagMenu = () => {
      return {type: CHANGE_FLAG_MENU}
}