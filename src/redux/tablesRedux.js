import { API_URL } from '../config';

//selectors

export const getAllTables = ({ tables }) => tables;

export const getTablesById = ({ tables }, id) => tables.find((table) => table.id === id);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;

const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});

export const editTableRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ ...table }),
    };

    fetch(`${API_URL}/tables/${table.id}`, options).then(() => dispatch(editTable(table)));
  };
};

export const updateTables = (payload) => ({
  type: UPDATE_TABLES,
  payload,
});

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;
