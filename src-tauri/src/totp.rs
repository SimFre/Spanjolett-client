use std::time::SystemTime;
use totp_rs::{Algorithm, TOTP, Secret};

const totp = TOTP::new(
    Algorithm::SHA1,
    6,
    1,
    30,
    Secret::Raw("TestSecretSuperSecret".as_bytes().to_vec()).to_bytes().unwrap(),
    Some("Github".to_string()),
    "constantoine@github.com".to_string(),
).unwrap();
const token = totp.generate_current().unwrap();
println!("{}", token);w