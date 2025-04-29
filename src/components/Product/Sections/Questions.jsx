import { useState } from 'react'

import { BsArrowReturnRight } from 'react-icons/bs'

/**
 *
 * @param {*} param0
 * @returns
 */

const Questions = ({ data }) => {
  // console.log("**", data)
  const [questions, setQuestions] = useState(data ? data : null)
  const [newQuestion, setNewQuestion] = useState()

  // console.log('***', questions)
  const handleNewQuestion = () => {
    let warning = ''

    try {
      if (newQuestion) {
        setQuestions((prev) => [...prev, { question: newQuestion, answer: '' }])
        setNewQuestion('')
        warning += 'Questão adiciona com sucesso'

        return
      }
      warning += 'Questão está vazia '
    } catch (err) {
      warning += ' Aconteceu um erro no salvamento, tente mais tarde. '
    }

    alert(warning)
    return
  }

  return (
    <section className='product__allinfo product__allinfo--comments product__allinfo--spaced'>
      <h3 className='product__section'>
        Conheça todos detalhes do seu próximo fone
      </h3>
      <div className='product__comments'>
        <div className='product__comments__entry'>
          <input
            className='product__comments__input'
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button
            className='product__comments__send'
            onClick={handleNewQuestion}
          >
            Peguntar
          </button>
        </div>
        <ul className='product__comments__made'>
          <li className='product__comments__title'>Peguntas feitas</li>
          {questions?.map((question, index) => {
            return (
              <li className='product__comments__comment' key={index}>
                {question.question}
                {question.answer ? (
                  <p className='product__comments__answer'>
                    <BsArrowReturnRight />
                    {question.answer ? question.answer : null}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Questions
