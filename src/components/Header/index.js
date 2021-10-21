import './style.css'

export default function Header ({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='https://img.elo7.com.br/product/360x360/2F57C6E/poster-impresso-netflix-logo-01-decoracao.jpg'
            alt='Netflix'
          />
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Usuário' />
        </a>
      </div>
    </header>
  )
}