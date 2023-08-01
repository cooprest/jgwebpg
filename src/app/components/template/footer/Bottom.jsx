export default function Bottom () {
  const date = new Date()
  return (
    <div className="footer-copyright bg-light py-4">
      <div className="container py-2">
        <div className="row">
          <div className="col">
            <p className="text-center text-3 mb-0">
              {`Cooperativa de Prestamos © ${date.getFullYear()}. All Rights Reserved.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
