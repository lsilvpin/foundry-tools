#!/bin/bash

# Defina as variáveis de ambiente
echo "Definindo as variáveis de ambiente..."
REMOTE_HOST="${REMOTE_HOST:-20.242.121.62}"
REMOTE_DIR="${REMOTE_DIR:-/home/lsilvpin/foundrydata/Data/modules/lsilvpin}"
LOCAL_BACKUP_DIR="${LOCAL_BACKUP_DIR:-/mnt/d/Backups/foundryvttdata}"

# Nomeie o arquivo de backup
echo "Nomeando o arquivo de backup..."
BACKUP_FILENAME="foundry_lsilvpin_mod_backup_$(date +'%d-%m-%Y-%H-%M-%S').tar.gz"

# Código para fazer o backup
echo "Fazendo o backup..."
ssh -i ~/.ssh/id_rsa $REMOTE_HOST "tar -czf - $REMOTE_DIR" > $LOCAL_BACKUP_DIR/$BACKUP_FILENAME

# Verifique se o backup foi feito com sucesso
echo "Verificando o resultado do backup..."
if [ $? -eq 0 ]; then
    # Apague todos os arquivos do diretório remoto
    echo "Apagando todos os arquivos do diretório remoto..."
    ssh -i ~/.ssh/id_rsa $REMOTE_HOST "rm -rf $REMOTE_DIR/*"

    # Envie todos os arquivos e diretórios da pasta atual para o diretório remoto
    echo "Enviando os arquivos e diretórios para o diretório remoto..."
    scp -i ~/.ssh/id_rsa -r ./* $REMOTE_HOST:$REMOTE_DIR
else
    echo "O backup falhou. Nenhum arquivo foi apagado ou enviado."
fi