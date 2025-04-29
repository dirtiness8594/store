import React from 'react'
import { useParams } from 'react-router-dom'

/**
 *
 * @param {*} param0
 * @returns
 */
function InstitutionalIndexPage() {
  
  let { name } = useParams()

  return (
    <div className='institutional'>
      <div className="institutional__wrap">
        <h1 className="institutional__title">Termos de uso</h1>
        <div className='institutional__content'>


  Estes Termos de Uso ("Termos") regem o uso deste serviço ("Serviço") disponibilizado por [Nome da Empresa ou Indivíduo] ("Nós", "Nosso" ou "Concedente").

  Ao acessar ou utilizar este Serviço, você concorda com estes Termos. Se você não concorda com estes Termos, por favor, não use o Serviço.

  <p><b>1. USO DO SERVIÇO</b>

  1.1. Você concorda em usar o Serviço apenas para fins legais e de acordo com estes Termos.

  1.2. Você é responsável por todas as atividades realizadas em sua conta associada ao Serviço.

  1.3. Não é permitido usar o Serviço de maneira que possa prejudicar, desabilitar, sobrecarregar ou comprometer a integridade do Serviço ou de outros usuários.
  </p>
  <p><b>2. CONTA DO USUÁRIO</b>

  2.1. Para acessar alguns recursos do Serviço, você pode ser solicitado a criar uma conta. As informações fornecidas devem ser precisas e atualizadas.

  2.2. Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades associadas à sua conta.
  </p>
  <p><b>3. PROPRIEDADE INTELECTUAL</b>

  3.1. Todo o conteúdo disponibilizado pelo Serviço, incluindo, mas não se limitando a textos, gráficos, logotipos, imagens e software, é de propriedade exclusiva do Concedente ou de seus licenciadores.

  3.2. Você concorda em não reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, realizar engenharia reversa ou de outra forma explorar qualquer parte do conteúdo sem a permissão expressa do Concedente.
  </p>
  <p><b>4. PRIVACIDADE</b>

  4.1. A coleta e o uso de informações pessoais estão sujeitos à nossa Política de Privacidade, que faz parte integrante destes Termos.
  </p>
  <p><b>5. RESCISÃO</b>

  5.1. O Concedente reserva-se o direito de rescindir ou suspender sua conta e acesso ao Serviço a qualquer momento, por qualquer motivo, sem aviso prévio.
  </p>
  <p><b>6. LIMITAÇÃO DE RESPONSABILIDADE</b>

  6.1. O Serviço é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.

  6.2. O Concedente não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar o Serviço.
  </p>
  <p><b>7. DISPOSIÇÕES GERAIS</b>

  7.1. Estes Termos constituem o acordo integral entre você e o Concedente em relação ao Serviço e substituem quaisquer acordos anteriores.

  7.2. O Concedente reserva-se o direito de modificar estes Termos a qualquer momento, mediante aviso prévio. O uso contínuo do Serviço após tais modificações constitui aceitação dos Termos atualizados.

  7.3. Estes Termos são regidos pelas leis do [Inserir Jurisdição], sem considerar seus conflitos de disposições legais.

  Ao utilizar este Serviço, você concorda com estes Termos de Uso. Se tiver alguma dúvida, entre em contato conosco em [Inserir Contato].
  </p>
        </div>
      </div>
    </div>
  )
}

export default InstitutionalIndexPage
