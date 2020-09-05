import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { Task } from '../tasks/task.entity'
import { Profile } from '../profile/profile.entity'
import { Post } from '../post/post.entity'
import { Comment } from '../comment/comment.entity'


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'potatoforum',
  password: 'postgres',
  entities: [ Task, User, Profile, Post, Comment ],
  synchronize: true,
}
