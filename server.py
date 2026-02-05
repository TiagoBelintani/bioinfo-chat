#!/usr/bin/env python3
"""
Servidor local simples para testar o BioInfo Chat PWA
Uso: python3 server.py
Depois abra: http://localhost:8000
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Headers para PWA funcionar corretamente
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        # MIME type correto para service worker
        if self.path.endswith('.js'):
            self.send_header('Content-Type', 'application/javascript')
        if self.path.endswith('.json'):
            self.send_header('Content-Type', 'application/json')
            
        super().end_headers()

def run_server():
    # Mudar para o diretório do script
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔════════════════════════════════════════════════════╗
║     🧬 BioInfo Chat - Servidor Local              ║
╚════════════════════════════════════════════════════╝

✅ Servidor rodando em: http://localhost:{PORT}
📱 Abra este link no seu navegador

⚠️  IMPORTANTE: Configure sua chave Groq no index.html
    antes de testar!

📖 Pressione Ctrl+C para parar o servidor
""")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Servidor encerrado. Até logo!")
            
if __name__ == "__main__":
    run_server()
