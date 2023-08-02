'use client'
import { useRef } from 'react'
import { sendMail } from '@/app/services/api/send.email'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function FormContact() {
  const router = useRouter()
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: 'email@siteweb.com',
      phone: formData.get('phone'),
      description: formData.get('message')
    }
    sendMail(data)
      .then(response => {
        toast.success('¡Perfecto, Mensaje Enviado!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      })
      .then(response => router.push('/thanks-you'))
      .catch((error) => {
        const textError = error.response.data.message
        const textName = '"name"'
        const textPhone = '"phone"'
        const textDescription = '"description"'

        if (textError.includes(textName)) {
          toast.error('ERROR, Por favor valide el campo nombre.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }

        if (textError.includes(textPhone)) {
          toast.error('ERROR, Por favor ingrese un número de teléfono válido.',{
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }
        
        if (textError.includes(textDescription)) {
          toast.error('ERROR, Por favor valide el campo monto.',{
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }
      })
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="contact-form custom-form-style-1"
      method="POST"
    >
      <div className="contact-form-success alert alert-success d-none mt-4">
        <strong>Success!</strong> Your message has been sent to us.
      </div>
      <div className="contact-form-error alert alert-danger d-none mt-4">
        <strong>Error!</strong> There was an error sending your message.
        <span className="mail-error-message text-1 d-block" />
      </div>
      <div className="row row-gutter-sm">
        <div className="form-group col mb-3">
          <input
            type="text"
            defaultValue=""
            data-msg-required="Por favor, escriba su nombre."
            maxLength={100}
            className="form-control"
            name="name"
            id="name"
            required=""
            placeholder="Nombre Completo"
          />
        </div>
      </div>
      <div className="row row-gutter-sm">
        <div className="form-group col mb-3">
          <input
            type="text"
            defaultValue=""
            data-msg-required="Please enter your email address."
            data-msg-email="Please enter a valid email address."
            maxLength={100}
            className="form-control"
            name="phone"
            id="phone"
            required=""
            placeholder="Numero Celular"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col mb-3">
          <textarea
            maxLength={1000}
            data-msg-required="Por favor ingrese el monto."
            rows={2}
            className="form-control"
            name="message"
            id="message"
            required=""
            placeholder="Monto a Solicitar"
            defaultValue={''}
            style={{ resize: 'none' }}
          />
        </div>
      </div>
      <div
        className="row appear-animation"
        data-appear-animation="fadeInUpShorterPlus"
        data-appear-animation-delay={1500}
      >
        <div className="form-group col mb-0">
          <button
            type="submit"
            className="btn btn-primary btn-modern font-weight-bold custom-btn-border-radius custom-btn-arrow-effect-1 text-3 px-5 py-3"
            data-loading-text="Cargando..."
          >
            ENVIAR
            <svg
              className="ms-2"
              version="1.1"
              viewBox="0 0 15.698 8.706"
              width={17}
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon
                stroke="#FFF"
                strokeWidth="0.1"
                fill="#FFF"
                points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "
              />
            </svg>
          </button>
          <div className="overflow-hidden mt-2">
            <Link
              href="/aviso-de-privacidad"
              className="d-inline-block custom-text-underline-1 font-weight-bold border-color-primary text-decoration-none text-2-3 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={500}
            >
              Aviso De Privacidad
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  )
}
