import { login, logout } from '../../actions/auth'

test('Should generate login action object', () => {
    const uid = 'hugfjvhgu'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('Should setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({ type: 'LOGOUT' })
})