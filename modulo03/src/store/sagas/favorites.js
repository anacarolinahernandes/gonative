import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as FavoriteCreators } from 'store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(FavoriteCreators.addFavoriteError('Repositório já adicionado.'));
    } else {
      yield put(FavoriteCreators.addFavoriteSuccess(response.data));
    }
  } catch (err) {
    yield put(FavoriteCreators.addFavoriteError('Repositório inexistente.'));
  }
}
