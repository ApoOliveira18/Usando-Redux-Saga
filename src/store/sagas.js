import { takeLatest, put, all, call } from 'redux-saga/effects';
//import { delay } from 'redux-saga';

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Fazer chocolate' },
        { id: 2, text: 'Fazer suco' },
        { id: 3, text: 'Fazer bolo' },
        { id: 4, text: 'Fazer batatas fritas' },
        { id: 5, text: 'Fazer salada' },
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);
    yield put({ type: 'SUCESS_TODO_LIST', payload: { data: response } });

  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
  yield all([
    takeLatest('REQUEST_TODO_LIST', getTodoList),
  ]);
}

