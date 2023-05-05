import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'André',
        email: 'andre@mail.com',
        password: 'andre123',
        passwordConfirmation: 'andre123'
      })
      .expect(200)
  })
})
