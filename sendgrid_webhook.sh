function localtunnel {
  lt -s okmijnuhb00x00x00asdfllkjsdf --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done