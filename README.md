# Welcome to Spanjolett

The app that allows you to lock your PC remotely in a
secure, quick and with zero registration.

# Idea

- Zero person registration required
- PC tray application registers itself on first start
    - Registration is machine generated key pair
    - Machine sends request to to target intermediate server to subscribe, sending only short pubkey
    - PC app should work on Linux, Mac and Windows
- Simple Android / iOS app
    - Support for multiple target machines
    - Scan machine QR to register machine with app
- Manual add to app using TOTP


Host QR to include pubkey + totp string


Client sends target pubkey + SOMETHING signed with its own private key
Host subscribes to its own pubkey
Upon seeing its own pubkey, verify validity of allowed client

Web server only saves last 5 minutes of locks codes


"Spanjolett är en låsskena i fönster och fönsterdörr. Skenan kopplar låset vid handtaget till kolvar längre ner och högre upp på fönstret för att få en bättre fasthållning av fönstret. På fönsterdörr finns oftast även en kolv på mitten av dörren. Kolvtyper kan variera från kilande (för tätning) och hakande (för ökad säkerhet). Stavas även espagnolett. "

"An espagnolette is a locking device, normally mounted on the vertical frame of a French door or casement window. A handle or knob is connected to a metal rod mounted to the surface of the frame, about a metre above the floor. Operating the handle rotates the rod, which has hooks at each end that fit into sockets at the head and sill of the opening.[1] This type of lock is often used on semi-trailer trucks to fasten the rear doors. It can be identified by the use of a round bar, instead of a half-round bar used on a crémone bolt. "

# Security considerations

- https://vuejs.org/guide/best-practices/security
- https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- https://www.zaproxy.org/

# Generate keys
This is how Wireguard supposedly does it. Should work for us too.
https://docs.rs/openssl/latest/openssl/

`openssl genpkey -algorithm X25519 -outform der -out privatekey.der
openssl pkey -inform der -in privatekey.der -pubout -outform der -out pubkey.der
cat pubkey.der | tail -c 32 | base64 > pubkey.txt
cat privatekey.der | tail -c 32 | base64 > privatekey.txt`
