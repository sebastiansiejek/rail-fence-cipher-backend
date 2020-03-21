import { readFileSync, unlinkSync } from 'fs'
import { Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import Response from '../utils/Response/Response'

@Controller('cipher-file')
export class CipherFileController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads'
      })
    })
  )
  uploadFile(@UploadedFile() file) {
    const response = new Response()

    if (file) {
      if (file.mimetype == 'text/plain') {
        const { path } = file

        try {
          readFileSync(path, 'utf8')
            .split('\n')
            .forEach(line => {
              const lineArray = line.split(' ')
              response.pushData({
                word: lineArray[0],
                height: parseInt(lineArray[1])
              })
            })
        } catch (error) {
          console.warn(error)
        }

        try {
          unlinkSync(path)
        } catch (error) {
          console.warn(error)
        }
      }
    }

    if (!file) {
      response.setType('ERROR')
      response.setMessage('File not exist')
      if (file.mimetype !== 'text/plain') response.setMessage('File type is not equal to text/plain')
    }

    return JSON.stringify(response)
  }
}
