import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base.service';
import { Contacts } from 'src/models/contacts.model';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ContactsService extends BaseService<Contacts>{
  constructor(@InjectModel('Contacts') private readonly contactModel: Model<Contacts>, private readonly mailerService: MailerService)
  {
    super(contactModel)
  }

  async sendEmail(data){
    const { email, name, content, phone } = data;
    const subject = `Contract Request from ${name}`;

    await this.mailerService.sendMail({
      to: email,
      subject,
      template: './mail.template',
      context: {
        name,
        email,
        phone,
        content
      }
    })
  }
}
