export const INSERT = 'INSERT';

export const insert = (data) => {
      return {
            type: INSERT,
            payload: data
      }
}
