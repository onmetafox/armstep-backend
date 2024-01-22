/// <reference types="multer" />
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from '../../dtos/reviews/create-review.dto';
import { UpdateReviewDto } from '../../dtos/reviews/update-review.dto';
export declare class ReviewsController {
    private readonly service;
    constructor(service: ReviewsService);
    createData(res: any, createDto: CreateReviewDto): Promise<any>;
    findAll(res: any, params: any): Promise<any>;
    findOne(res: any, id: string): Promise<any>;
    updateData(res: any, id: string, data: UpdateReviewDto): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
}
