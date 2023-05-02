import useLocalStorage from 'hooks/useLocalStorage';
import styles from './SignupForm.module.css';

export default function SignupForm() {
  // before custom hook
  //   const [email, setEmail] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('email')) ?? '';
  //   });

  //   const [password, setPassword] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('password')) ?? '';
  //   }); // lazy state initiolization

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  //   const handleEmailChange = event => {
  //     setEmail(event.target.value);
  //   };

  //   const handlePasswordChange = event => {
  //     setPassword(event.target.value);
  //   };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  // before custom hook
  //   useEffect(() => {
  //     window.localStorage.setItem('email', JSON.stringify(email));
  //   }, [email]);

  //   useEffect(() => {
  //     window.localStorage.setItem('password', JSON.stringify(password));
  //   }, [password]);

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Mail</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={styles.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Sign In</button>
    </form>
  );
}
