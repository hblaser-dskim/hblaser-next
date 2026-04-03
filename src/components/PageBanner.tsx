export default function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
