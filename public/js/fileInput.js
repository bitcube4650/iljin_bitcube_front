export default {
  applyFile(){
    const handler1 = {
      maxFileCount: 1,
  
      init() {
        const fileInput = document.querySelector('#file-input');
        const preview = document.querySelector('#preview');
  
        if (fileInput) {
          fileInput.addEventListener('change', () => {
            const files = Array.from(fileInput.files);
  
            if (files.length > this.maxFileCount) {
              alert(`최대 ${this.maxFileCount}개의 파일만 업로드할 수 있습니다.`);
              fileInput.value = ''; // 파일 입력 초기화
              return;
            }
  
            preview.innerHTML = ''; // 이전 미리보기 내용 지우기
  
            files.forEach(file => {
              preview.innerHTML += `
                <p id="${file.lastModified}">
                  ${file.name}
                  <button data-index='${file.lastModified}' class='file-remove'>삭제</button>
                </p>`;
            });
          });
  
          this.removeFile();
        }
      },
  
      removeFile() {
        document.addEventListener('click', (e) => {
          if (e.target.className !== 'file-remove') return;
          const removeTargetId = e.target.dataset.index;
          const removeTarget = document.getElementById(removeTargetId);
          const files = document.querySelector('#file-input').files;
          const dataTransfer = new DataTransfer();
  
          Array.from(files)
            .filter(file => file.lastModified != removeTargetId)
            .forEach(file => {
              dataTransfer.items.add(file);
            });
  
          document.querySelector('#file-input').files = dataTransfer.files;
  
          removeTarget.remove();
        });
      }
    }
  
    handler1.init();
  
  
    const handler2 = {
      maxFileCount: 1,
  
      init() {
        const fileInput = document.querySelector('#file-input2');
        const preview = document.querySelector('#preview2');
  
        if (fileInput) {
          fileInput.addEventListener('change', () => {
            const files = Array.from(fileInput.files);
  
            if (files.length > this.maxFileCount) {
              alert(`최대 ${this.maxFileCount}개의 파일만 업로드할 수 있습니다.`);
              fileInput.value = ''; // 파일 입력 초기화
              return;
            }
  
            preview.innerHTML = ''; // 이전 미리보기 내용 지우기
  
            files.forEach(file => {
              preview.innerHTML += `
                <p id="${file.lastModified}">
                  ${file.name}
                  <button data-index='${file.lastModified}' class='file-remove'>삭제</button>
                </p>`;
            });
          });
  
          this.removeFile();
        }
      },
  
      removeFile() {
        document.addEventListener('click', (e) => {
          if (e.target.className !== 'file-remove') return;
          const removeTargetId = e.target.dataset.index;
          const removeTarget = document.getElementById(removeTargetId);
          const files = document.querySelector('#file-input2').files;
          const dataTransfer = new DataTransfer();
  
          Array.from(files)
            .filter(file => file.lastModified != removeTargetId)
            .forEach(file => {
              dataTransfer.items.add(file);
            });
  
          document.querySelector('#file-input2').files = dataTransfer.files;
  
          removeTarget.remove();
        });
      }
    }
  
    handler2.init();
  
  
  
  
  
    const handler3 = {
      maxFileCount: 1,
  
      init() {
        const fileInput = document.querySelector('#file-input3');
        const preview = document.querySelector('#preview3');
  
        if (fileInput) {
          fileInput.addEventListener('change', () => {
            const files = Array.from(fileInput.files);
  
            if (files.length > this.maxFileCount) {
              alert(`최대 ${this.maxFileCount}개의 파일만 업로드할 수 있습니다.`);
              fileInput.value = ''; // 파일 입력 초기화
              return;
            }
  
            preview.innerHTML = ''; // 이전 미리보기 내용 지우기
  
            files.forEach(file => {
              preview.innerHTML += `
                <p id="${file.lastModified}">
                  ${file.name}
                  <button data-index='${file.lastModified}' class='file-remove'>삭제</button>
                </p>`;
            });
          });
  
          this.removeFile();
        }
      },
  
      removeFile() {
        document.addEventListener('click', (e) => {
          if (e.target.className !== 'file-remove') return;
          const removeTargetId = e.target.dataset.index;
          const removeTarget = document.getElementById(removeTargetId);
          const files = document.querySelector('#file-input3').files;
          const dataTransfer = new DataTransfer();
  
          Array.from(files)
            .filter(file => file.lastModified != removeTargetId)
            .forEach(file => {
              dataTransfer.items.add(file);
            });
  
          document.querySelector('#file-input3').files = dataTransfer.files;
  
          removeTarget.remove();
        });
      }
    }
  
    handler3.init();
  
  
  
  
  
    const handler4 = {
        maxFileCount: 1,
  
        init() {
            const fileInput = document.querySelector('#file-input4');
            const preview = document.querySelector('#preview4');
  
            if (fileInput) {
              fileInput.addEventListener('change', () => {
                  const files = Array.from(fileInput.files);
  
                  if (files.length > this.maxFileCount) {
                      alert(`최대 ${this.maxFileCount}개의 파일만 업로드할 수 있습니다.`);
                      fileInput.value = ''; // 파일 입력 초기화
                      return;
                  }
  
                  preview.innerHTML = ''; // 이전 미리보기 내용 지우기
  
                  files.forEach(file => {
                      preview.innerHTML += `
                          <p id="${file.lastModified}">
                              ${file.name}
                              <button data-index='${file.lastModified}' class='file-remove'>삭제</button>
                          </p>`;
                  });
              });
  
              this.removeFile(fileInput, preview);
            }
        },
  
        removeFile(fileInput, preview) {
            document.addEventListener('click', (e) => {
                if (e.target.className !== 'file-remove') return;
                const removeTargetId = e.target.dataset.index;
                const removeTarget = document.getElementById(removeTargetId);
                const files = fileInput.files;
                const dataTransfer = new DataTransfer();
  
                Array.from(files)
                    .filter(file => file.lastModified != removeTargetId)
                    .forEach(file => {
                        dataTransfer.items.add(file);
                    });
  
                fileInput.files = dataTransfer.files;
                removeTarget.remove();
            });
        }
    }
  
    handler4.init();
  
  
  }  
}

