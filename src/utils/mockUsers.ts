import { User } from '../types/user'

const mockUsers: User[] = [
  {
    id: 1,
    username: 'alice_admin',
    password: 'password123',
    role: 'admin',
  },
  {
    id: 2,
    username: 'bob_user',
    password: 'securepassword',
    role: 'user',
  },
  {
    id: 3,
    username: 'charlie_admin',
    password: 'charliepass',
    role: 'admin',
  },
  {
    id: 4,
    username: 'dave_user',
    password: 'dave2023',
    role: 'user',
  },
  {
    id: 5,
    username: 'eve_user',
    password: 'evePassword!',
    role: 'user',
  },
  {
    id: 6,
    username: 'frank_admin',
    password: 'admin1234',
    role: 'admin',
  },
  {
    id: 7,
    username: 'grace_user',
    password: 'gracePassword',
    role: 'user',
  },
  {
    id: 8,
    username: 'henry_admin',
    password: 'henryAdminPass',
    role: 'admin',
  },
]

export default mockUsers; 