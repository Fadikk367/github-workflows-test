import { Request, Response } from 'express';
import { add, subtract, divide, multiply } from '../services/example.service';

export const exampleGetController = async (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there, It seems to work :D</h1>
      <form action="/example" method="POST">
        <input name="num1" type="number" placeholder="number a"><br />
        <input name="num2" type="number" placeholder="number b"> <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  `);
}

export const examplePostController = async (req: Request, res: Response) => {
  const {num1, num2}: {num1: string, num2: string} = req.body;
  const a = Number(num1);
  const b = Number(num2);
  console.log(`a: ${a}, b: ${b}`);
  try {
    const addition = add(a, b);
    const subtraction = subtract(a, b);
    const multiplication = multiply(a, b);
    const division = divide(a, b);
    res.send(`
      <div>
        <h1>Result:</h1>
        <span>a + b: ${addition}</span><br />
        <span>a - b: ${subtraction}</span><br />
        <span>a * b: ${multiplication}</span><br />
        <span>a / b: ${division}</span><br />
      </div>
    `);
  } catch (err) {
    console.log(err.message);
    res.send(`<h2>Sorry, something broke</h2>`);
  }
}