import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login();

  mensagem = "";

  onSubmit() {
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";" ]

    listaPalavras.forEach(palavra => {
      if(this.loginModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados invalidos"
        return;
      }
    });

    this.loginService.login(this.loginModel).subscribe( (response) => {
      this.mensagem = "Login com sucesso!";
      this.router.navigateByUrl("/");
    }, (error) =>{
      console.log(error)
      this.mensagem = error.error;
    } )
  }
}
