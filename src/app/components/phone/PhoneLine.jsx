import Link from 'next/link'

export default function PhoneLine({ display, text, textColor }) {
  return (
    <>
      <span
        className={`${display} text-1 font-weight-semibold text-color-default`}
      >
        ¡Llame Ya!
      </span>
      <strong className={text}>
        <Link
          href={`tel:+57${process.env.NEXT_PUBLIC_PHONE_LINE}`}
          className={`${textColor} text-color-hover-primary text-decoration-none`}
        >
          {process.env.NEXT_PUBLIC_PHONE_LINE}
        </Link>
      </strong>
    </>
  )
}
