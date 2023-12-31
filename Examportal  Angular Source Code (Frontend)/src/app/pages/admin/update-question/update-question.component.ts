import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  qId;
  quesId;
  qTitle;
  question:any = {
    quesId:'',
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  questions:any;

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    // private _quiz: QuizService
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params.qid;
    this.quesId = this._route.snapshot.params.quesId;
    console.log(this.qId);
    console.log(this.quesId);
    
    this.question.quiz['qId'] = this.qId;
    setTimeout(() => {
      this.callData();
    }, 0);
    // this.qTitle = this._route.snapshot.params.title;
    
  }
  
  callData(){
    this._question.getQuestionsOfQuizForTest(this.qId).subscribe((res:any)=>{
      this.questions = res;
      console.log('hi');
      
      console.log(typeof this.quesId);
      let res2=this.questions.filter(element => {
        // console.log(typeof element.quesId);
        
        return (element.quesId==this.quesId)
      });
      // console.log(res2);
      this.question =res2[0];
      
      
      console.log(this.questions);
      console.log(this.question);
    })
  }
  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success ', 'Question Added. Add Another one', 'success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      },
      (error) => {
        Swal.fire('Error', 'Error in adding question', 'error');
      }
    );
  }
}
