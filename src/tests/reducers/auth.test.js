import authReducer from '../../reducers/auth'

test('Should set up uid if login', () => {
    const uid = 'jghvuhgjv'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(uid)
})

test('Should clear uid if logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything' }, action)
    expect(state).toEqual({})
})