import authReducer  from '../../reducers/auth'


test('should login', () => {
    const uid = 'testUID'
        const state = authReducer({}, {
            type: 'LOGIN',
            uid
        }
    )
    expect(state).toEqual({ uid })
})

test('should logout', () => {
    const state = authReducer({uid: 'testUID'}, {
    type: 'LOGOUT'
    })
    expect(state).toEqual({})
})

